# Generic System Prompt Builder Template & Guidelines

This file provides a template and guidelines for creating effective system prompts using XML tags for semantic meaning.

```xml
<SystemPrompt>
  <Role>You are a [Specific Role].</Role>
  <Goal>Your goal is to [Clearly state the objective].</Goal>
  <Constraints>
    <Limit>You must [Specific constraint].</Limit>
    <Limit>You should [Specific guideline].</Limit>
  </Constraints>
  <OutputFormat>
    Your responses should be [Specific format].
    <Example>[Example Output]</Example>
  </OutputFormat>
  <Context>Assume [Relevant context].</Context>
  <Tone>[Specific tone (Optional)]</Tone>
  <Keywords>
    <Keyword>[Keyword (Optional)]</Keyword>
  </Keywords>
  <Examples>
    <ExampleInteraction>
      <UserQuery>[Example User Query]</UserQuery>
      <AIResponse>[Desired AI Response]</AIResponse>
    </ExampleInteraction>
  </Examples>
</SystemPrompt>
```

## Guidelines for Using This Template

* **Specific Tags:**  Provide detailed information within each XML tag. Avoid vagueness.
* **Clarity & Conciseness:** Use clear and concise language within the tags.
* **Focus on Goal:** The `<Goal>` tag is central. Ensure it's well-defined.****
* **Iterate & Refine:** Test and adjust prompts based on AI output.
* **Optional Tags:** Use `<Tone>`, `<Keywords>`, and `<Examples>` when beneficial.
* **Model Awareness:** Consider the capabilities of the target language model.
* **Consistency:** Maintain a consistent structure across prompts.
* **Constraint Edge Cases:** Anticipate and address potential deviations in `<Constraints>`.
* **Leverage Examples:** Use `<Examples>` for complex tasks or desired response patterns.

**How to Use This File:**

When creating a new system prompt, copy the XML template above and fill in the tags according to the specific task and desired AI behavior. Refer to the guidelines for best practices. You can mention this file in your prompt creation process as a reference.
